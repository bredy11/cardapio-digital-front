import { reactive, ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useToast } from 'primevue/usetoast';
import type { RestaurantForm } from '@/models/Restaurant';

// Initial state for the form, adhering to the RestaurantForm interface
const initialFormState: RestaurantForm = {
  idUsuario: 1, // Hardcoded as per requirements
  nome: '',
  telefone: '',
  urlFacebock: '',
  urlInstagram: '',
  urlSite: '',
  horarioFuncionamento: {
    segunda: ['', ''],
    terca: ['', ''],
    quarta: ['', ''],
    quinta: ['', ''],
    sexta: ['', ''],
    sabado: ['', ''],
    domingo: ['', ''],
  },
  endereco: {
    cep: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    estado: '',
  },
  imagem: null,
  categoria: '',
};

export function useRegisterRestaurantViewModel() {
  const router = useRouter();
  const toast = useToast();

  const form = reactive<RestaurantForm>({ ...initialFormState });
  const imagePreview = ref<string | null>(null);
  const activeTabIndex = ref(0);

  /**
   * Handles the custom file upload event from PrimeVue's FileUpload.
   * Converts the selected file to a Base64 string for the payload
   * and creates a temporary URL for real-time preview.
   * @param event - The file upload event containing the file.
   */
  const handleImageUpload = (event: { files: File[] }) => {
    const file = event.files[0];
    if (!file) return;

    // Create a URL for the preview
    imagePreview.value = URL.createObjectURL(file);

    // Convert the file to Base64 for the API
    const reader = new FileReader();
    reader.onload = () => {
      form.imagem = reader.result as string;
    };
    reader.onerror = () => {
      toast.add({ severity: 'error', summary: 'Erro', detail: 'Não foi possível ler a imagem.', life: 3000 });
    };
    reader.readAsDataURL(file);
  };

  /**
   * Validates the form to ensure required fields are filled.
   * @returns {boolean} - True if the form is valid, false otherwise.
   */
  const validateForm = (): boolean => {
    if (!form.nome || !form.categoria || !form.telefone || !form.endereco.cep) {
      toast.add({ severity: 'warn', summary: 'Atenção', detail: 'Preencha todos os campos obrigatórios.', life: 3000 });
      return false;
    }
    return true;
  };

  /**
   * Submits the restaurant registration form to the backend API.
   */
  const submitRegistration = async () => {
    if (!validateForm()) {
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/v1/restaurante', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Ocorreu um erro ao cadastrar o restaurante.');
      }

      toast.add({ severity: 'success', summary: 'Sucesso', detail: 'Restaurante cadastrado com sucesso!', life: 3000 });
      router.push('/homeUsuario');

    } catch (error: any) {
      toast.add({ severity: 'error', summary: 'Erro', detail: error.message, life: 4000 });
    }
  };

  /**
   * Navigates back to the user's home page.
   */
  const cancelRegistration = () => {
    router.push('/homeUsuario');
  };

  // Dummy data for dropdowns, to be used in the view
  const categories = ref([
    { name: 'Pizzaria', code: 'PZ' },
    { name: 'Hamburgueria', code: 'HG' },
    { name: 'Japonesa', code: 'JP' },
    { name: 'Brasileira', code: 'BR' },
  ]);

  const states = ref(['SP', 'RJ', 'MG', 'BA', 'SC', 'RS', 'PE', 'CE', 'PR']);

  return {
    form,
    imagePreview,
    activeTabIndex,
    categories,
    states,
    handleImageUpload,
    submitRegistration,
    cancelRegistration
  };
}