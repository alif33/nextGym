import {
  CheckSquare, Circle, FileText, Home
} from "react-feather";

export const menuItem = [
    {id: 1,
     url: '/admin/dashboard',
     title: 'Dashboard',
     short: 'dashboard',
     icon: <Home/>,
     children:[
         
     ]
    },
    {id: 2,
      url: '#',
      title: 'Members',
      short: 'members',
      icon: <FileText/>,
      children: [
          {id: 1,
           url: '/admin/member/add',
           title: 'Add Member',
           icon: <Circle/>
         },
          {id: 2,
           url: '/admin/member/list',
           title: 'Member List',
           icon: <Circle/>
         },
      ]
     },
     {id: 3,
      url: '#',
      title: 'Staff Members',
      short: 'staff',
      icon: <FileText/>,
      children: [
          {id: 1,
           url: '/admin/staff/add',
           title: 'Add Staff',
           icon: <Circle/>
         },
          {id: 2,
           url: '/admin/staff/list',
           title: 'Staff List',
           icon: <Circle/>
         },
      ]
     },
     {id: 10,
      url: '#',
      title: 'Class Schedule ',
      short: 'schedule',
      icon: <FileText/>,
      children: [
          {id: 1,
           url: '/admin/staff/add',
           title: 'Add Staff',
           icon: <Circle/>
         },
          {id: 2,
           url: '/admin/staff/list',
           title: 'Staff List',
           icon: <Circle/>
         },
      ]
     },
     {id: 11,
      url: '#',
      title: 'Product',
      short: 'product',
      icon: <FileText/>,
      children: [
          {id: 1,
           url: '/admin/product/add',
           title: 'Add Product',
           icon: <Circle/>
         },
          {id: 2,
           url: '/admin/product/list',
           title: 'Product List',
           icon: <Circle/>
         },
      ]
     },
    {id: 4,
     url: '/admin/todo',
     title: 'POS',
     short: 'pos',
     icon: <CheckSquare/>,
     children: [
      {id: 1,
       url: '/admin/pos/Sell',
       title: 'Sell',
       icon: <Circle/>
     },
     
  ]
    },
    {id: 7,
     url: '#',
     title: 'Nutriation/Diet',
     short: 'nutiration/diet',
     icon: <FileText/>,
     children: [
         {id: 1,
          url: '/admin/nutriation/diet/add',
          title: 'Add',
          icon: <Circle/>
        },
         {id: 2,
          url: '/admin/invoice/preview',
          title: 'Preview',
          icon: <Circle/>
        },
         {id: 3,
          url: '/admin/invoice/edit',
          title: 'Edit',
          icon: <Circle/>
        },
         {id: 4,
          url: '/admin/invoice/add',
          title: 'Add',
          icon: <Circle/>
        },
     ]
    }
  
]