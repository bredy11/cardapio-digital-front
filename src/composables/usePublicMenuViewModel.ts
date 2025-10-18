import { ref, computed, type Ref } from 'vue';
import type { MenuItemPayload, CartItem } from '@/models/menu';
import { useToast } from 'primevue/usetoast';

export function usePublicMenuViewModel() {
  const toast = useToast();

  const menuItems: Ref<MenuItemPayload[]> = ref([
    {
      idRestaurante: 1,
      nome: 'Palan Culcus',
      descricao: 'Resceipe porlande flargo',
      categoria: 'Pratos Principais',
      valorTotal: 129.0,
      quantidadeDePessoasQueServe: 2,
      imagem: 'https://picsum.photos/id/11/200/200'
    },
    {
      idRestaurante: 1,
      nome: 'Palan Culcus 2',
      descricao: 'Resceipe porlande flargo',
      categoria: 'Pratos Principais',
      valorTotal: 129.0,
      quantidadeDePessoasQueServe: 2,
      imagem: 'https://picsum.photos/id/12/200/200'
    },
    {
      idRestaurante: 1,
      nome: 'Salada Ceasar',
      descricao: 'Alface, frango, croutons e molho ceasar',
      categoria: 'Entradas',
      valorTotal: 45.0,
      quantidadeDePessoasQueServe: 1,
      imagem: 'https://picsum.photos/id/13/200/200'
    },
    {
      idRestaurante: 1,
      nome: 'Bruschetta',
      descricao: 'Pão italiano, tomate, alho e manjericão',
      categoria: 'Entradas',
      valorTotal: 35.0,
      quantidadeDePessoasQueServe: 1,
      imagem: 'https://picsum.photos/id/14/200/200'
    },
    {
      idRestaurante: 1,
      nome: 'Pudim de Leite',
      descricao: 'Pudim de leite condensado',
      categoria: 'Sobremesas',
      valorTotal: 25.0,
      quantidadeDePessoasQueServe: 1,
      imagem: 'https://picsum.photos/id/15/200/200'
    },
    {
        idRestaurante: 1,
        nome: 'Coca-cola',
        descricao: 'Lata 350ml',
        categoria: 'Bebidas',
        valorTotal: 8.0,
        quantidadeDePessoasQueServe: 1,
        imagem: null
      },
  ]);

  const cartItems: Ref<CartItem[]> = ref([]);
  const isCartVisible = ref(false);
  const tableNumber: Ref<number | null> = ref(null);

  const availableCategories = computed(() => {
    const categories = menuItems.value.map((item) => item.categoria);
    return [...new Set(categories)].sort();
  });

  const cartTotalValue = computed(() => {
    return cartItems.value.reduce((total, item) => total + item.valorTotal * item.quantidade, 0);
  });

  const cartTotalQuantity = computed(() => {
    return cartItems.value.reduce((total, item) => total + item.quantidade, 0);
  });

  const addItemToCart = (itemToAdd: MenuItemPayload) => {
    const existingItem = cartItems.value.find((item) => item.nome === itemToAdd.nome);
    if (existingItem) {
      existingItem.quantidade++;
    } else {
      cartItems.value.push({ ...itemToAdd, quantidade: 1 });
    }
    toast.add({ severity: 'success', summary: 'Adicionado', detail: `${itemToAdd.nome} adicionado ao carrinho.`, life: 3000 });
  };

  const removeItemFromCart = (itemToRemove: CartItem) => {
    const existingItem = cartItems.value.find((item) => item.nome === itemToRemove.nome);
    if (existingItem) {
      if (existingItem.quantidade > 1) {
        existingItem.quantidade--;
      } else {
        cartItems.value = cartItems.value.filter((item) => item.nome !== itemToRemove.nome);
      }
    }
  };

  const toggleCart = () => {
    isCartVisible.value = !isCartVisible.value;
  };

  const sendOrder = () => {
    if (!tableNumber.value || tableNumber.value <= 0) {
        toast.add({ severity: 'error', summary: 'Erro', detail: 'Por favor, informe o número da mesa.', life: 3000 });
        return;
    }
    // Simulate order sending
    console.log('Order sent for table:', tableNumber.value, 'with items:', cartItems.value);
    toast.add({ severity: 'success', summary: 'Pedido Enviado', detail: 'Seu pedido foi enviado para a cozinha!', life: 3000 });

    cartItems.value = [];
    tableNumber.value = null;
    isCartVisible.value = false;
  };

  return {
    menuItems,
    cartItems,
    isCartVisible,
    tableNumber,
    availableCategories,
    cartTotalValue,
    cartTotalQuantity,
    addItemToCart,
    removeItemFromCart,
    toggleCart,
    sendOrder,
  };
}