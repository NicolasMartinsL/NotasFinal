export const navigation = [
  {
    text: 'Home',
    path: '/home',
    icon: 'home'
  },
  {
    text: 'Principal',
    path: '/principal',
    icon: 'home'
  },
  {
    text: 'Cadastos',
    icon: 'folder',
    items: [
      {
        text: 'Clientes',
        path: '/CadastroCliente'
      },
      {
        text: 'Notas Fiscais',
        path: '/CadastroNotaFiscal'
      },
      {
        text: 'Produtos',
        path: '/CadastroProdutos'
      }
    ]
  }
];
