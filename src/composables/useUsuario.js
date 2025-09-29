import { ref } from 'vue';
import { useToast } from 'primevue/usetoast';
import { Usuario } from '@/models/usuario';
import { usuarioService } from '@/services/usuarioService';

export function useUsuario() {
  const usuario = ref(new Usuario());
  const toast = useToast();

  const validarCampos = () => {
    const { nome, email, senha, telefone } = usuario.value;
    if (!nome || !email || !senha || !telefone) {
      toast.add({ severity: 'error', summary: 'Erro', detail: 'Todos os campos são obrigatórios.', life: 3000 });
      return false;
    }
    return true;
  };

  const cadastrar = async () => {
    if (!validarCampos()) {
      return;
    }

    try {
      await usuarioService.cadastrar(usuario.value);
      toast.add({ severity: 'success', summary: 'Sucesso', detail: 'Usuário cadastrado com sucesso!', life: 3000 });
      // Reset form
      usuario.value = new Usuario();
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Erro ao cadastrar usuário.';
      toast.add({ severity: 'error', summary: 'Erro', detail: errorMessage, life: 3000 });
    }
  };

  return {
    usuario,
    cadastrar,
  };
}