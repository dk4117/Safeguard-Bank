export const menuItemsData = [
    {
      title: 'Home',
      url: '/home',
    },
    {
      title: 'Services',
      url: '/services',
    },
    {
      title: 'About',
      url: '/about',
    },
    {
        title: 'Contact',
        url: '/contact' 
    },
    {
        title:'Login',
        url:'/login',
        submenu: [
            {
              title: 'Customer',
              url: '/customer/login',
            },
            {
              title: 'Employee',
              url: '/employee/login',
            },
          ],
    }
  ]