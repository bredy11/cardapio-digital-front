import { ref, reactive, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useToast } from 'primevue/usetoast';

// Interface for the menu item payload
export interface MenuItemPayload {
  nome: string;
  descricao: string;
  categoria: string; // ALTERADO: STRING (singular)
  valorTotal: number;
  quantidadeDePessoasQueServe: number;
  imagem: string | null;
  idRestaurante: number;
}

// Initial state for the temporary form used to add a new item
const initialNewItemFormState: MenuItemPayload = {
  nome: '',
  descricao: '',
  categoria: '',
  valorTotal: 0,
  quantidadeDePessoasQueServe: 1,
  imagem: null,
  idRestaurante: 1, // Hardcoded as per requirements
};

export function useRegisterMenuDetailsViewModel() {
  const router = useRouter();
  const toast = useToast();

  // The main list of menu items to be sent to the API
  const menuItemsList = ref<MenuItemPayload[]>([]);

  // The reactive form for adding a new item
  const newItemForm = reactive<MenuItemPayload>({ ...initialNewItemFormState });

  const itemImagePreview = ref<string | null>(null);

  /**
   * Handles the image upload for a new menu item.
   * Converts the file to Base64 and updates the form and preview.
   * @param event - The file upload event.
   */
  const handleImageUpload = (event: { files: File[] }) => {
    const file = event.files[0];
    if (!file) {
      newItemForm.imagem = null;
      itemImagePreview.value = null;
      return;
    }

    itemImagePreview.value = URL.createObjectURL(file);

    const reader = new FileReader();
    reader.onload = () => {
      newItemForm.imagem = reader.result as string;
    };
    reader.onerror = () => {
      toast.add({ severity: 'error', summary: 'Erro', detail: 'Falha ao processar a imagem.', life: 3000 });
    };
    reader.readAsDataURL(file);
  };

  /**
   * Clears the new item form and the image preview.
   */
  const clearNewItemForm = () => {
    Object.assign(newItemForm, initialNewItemFormState);
    itemImagePreview.value = null;
    // We might need to programmatically clear the FileUpload component in the view
  };

  /**
   * Validates and adds the item from the form to the main menu list.
   */
  const addItemToMenu = () => {
    // Specific validations
    if (!newItemForm.nome.trim()) {
      toast.add({ severity: 'warn', summary: 'Campo Obrigatório', detail: 'Por favor, preencha o nome do item.', life: 3000 });
      return;
    }
    if (newItemForm.valorTotal <= 0) {
      toast.add({ severity: 'warn', summary: 'Valor Inválido', detail: 'O valor do item deve ser maior que zero.', life: 3000 });
      return;
    }
    if (!newItemForm.categoria.trim()) {
      toast.add({ severity: 'warn', summary: 'Campo Obrigatório', detail: 'Selecione ou crie uma categoria para o item.', life: 3000 });
      return;
    }

    // Add a copy of the item to the list
    menuItemsList.value.push({ ...newItemForm });

    // Clear the form for the next item
    clearNewItemForm();
    toast.add({ severity: 'success', summary: 'Sucesso', detail: 'Item adicionado ao cardápio!', life: 2000 });
  };

  /**
   * Submits the entire menu (the list of items) to the backend.
   */
  const saveMenuDetails = async () => {
    if (menuItemsList.value.length === 0) {
      toast.add({ severity: 'warn', summary: 'Atenção', detail: 'Adicione pelo menos um item ao cardápio antes de salvar.', life: 3000 });
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/cardapio', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(menuItemsList.value),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Ocorreu um erro ao salvar o cardápio.');
      }

      toast.add({ severity: 'success', summary: 'Sucesso!', detail: 'Cardápio salvo com sucesso!', life: 3000 });
      // Optionally, navigate away or clear the state
      menuItemsList.value = [];
      router.push('/homeUsuario'); // Example navigation
    } catch (error: any) {
      toast.add({ severity: 'error', summary: 'Erro', detail: error.message, life: 4000 });
    }
  };

  /**
   * A computed property to get all unique categories from the items list.
   * This will be used to dynamically generate the tabs in the preview.
   */
  const availableCategories = computed(() => {
    const categories = new Set<string>(menuItemsList.value.map(item => item.categoria));
    return Array.from(categories);
  });

  /**
   * Filters the menu items list by a given category.
   * @param category - The category to filter by.
   */
  const getProductsByCategory = (category: string) => {
    return menuItemsList.value.filter(item => item.categoria === category);
  };

  return {
    newItemForm,
    itemImagePreview,
    menuItemsList,
    availableCategories,
    uniqueCategories: availableCategories, // Keep original name for compatibility if needed, or just replace
    getProductsByCategory,
    handleImageUpload,
    addItemToMenu,
    clearNewItemForm,
    saveMenuDetails,
  };
}