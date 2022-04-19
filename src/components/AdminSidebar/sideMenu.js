import {
  CheckSquare, Circle, FileText, Home
} from "react-feather";

export const menuItem = [
    {id: 1,
     url: '/admin/dashboard',
     title: 'Dashboard',
     height: '',
     icon: <Home/>,
     children:[
         
     ]
    },
    {id: 2,
      url: '#',
      title: 'Members',
      size: '140px',
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
      size: '140px',
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
      size: '140px',
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
      size: '140px',
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
     url: '#',
     title: 'POS',
     size: '100px',
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
     size: '211px',
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