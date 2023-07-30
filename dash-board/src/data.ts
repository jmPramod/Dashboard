import HomeIcon from '@mui/icons-material/Home';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';

export const menu = [
  {
    id: 1,
    title: 'main',
    listItem: [
      {
        id: 1,
        title: 'main',
        listItem: [
          {
            id: 1,
            title: 'Home Page',
            url: '/',
            icons: HomeIcon,
          },
          {
            id: 2,
            title: 'Profile',
            url: '/user/1',
            icons: PermIdentityIcon,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: 'list',
    listItem: [
      {
        id: 1,
        title: 'users',
        url: '/users',
        icons: HomeIcon,
      },
      {
        id: 2,
        title: 'Product',
        url: '/product',
        icons: PermIdentityIcon,
      },
      {
        id: 3,
        title: 'Orders',
        url: '/orders',
        icons: PermIdentityIcon,
      },
      {
        id: 4,
        title: 'Posts',
        url: '/posts',
        icons: PermIdentityIcon,
      },
    ],
  },
  {
    id: 3,
    title: 'general',
    listItem: [
      {
        id: 1,
        title: 'Elements',
        url: '/',
        icons: HomeIcon,
      },
      {
        id: 2,
        title: 'Notes',
        url: '/',
        icons: PermIdentityIcon,
      },
      {
        id: 3,
        title: 'Forms',
        url: '/',
        icons: PermIdentityIcon,
      },
    ],
  },
  {
    id: 4,
    title: 'Maintainance',
    listItem: [
      {
        id: 1,
        title: 'Setting',
        url: '/',
        icons: HomeIcon,
      },
      {
        id: 2,
        title: 'Back up',
        url: '/',
        icons: PermIdentityIcon,
      },
    ],
  },
  {
    id: 5,
    title: 'Analysis',
    listItem: [
      {
        id: 1,
        title: 'Charts',
        url: '/',
        icons: HomeIcon,
      },
      {
        id: 2,
        title: 'Logo',
        url: '/',
        icons: PermIdentityIcon,
      },
      {
        id: 3,
        title: 'Forms',
        url: '/',
        icons: PermIdentityIcon,
      },
    ],
  },
];
export const TopUsers = [
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    userName: 'pramod',
    email: 'pramod@gmail.com',
    amount: '100',
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    userName: 'pavi',
    email: 'pavi@gmail.com',
    amount: '200',
  },
  {
    id: 3,
    img: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1372&q=80',
    userName: 'maruthi',
    email: 'maruthi@gmail.com',
    amount: '300',
  },
  {
    id: 4,
    img: 'https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
    userName: 'mamatha',
    email: 'mamatha@gmail.com',
    amount: '10',
  },
  {
    id: 5,
    img: 'https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80',
    userName: 'tulasi',
    email: 'tulasi@gmail.com',
    amount: '90',
  },
];
