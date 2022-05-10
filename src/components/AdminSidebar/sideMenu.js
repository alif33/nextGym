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
           url: '/admin/class-schedule/add',
           title: 'Add',
           icon: <Circle/>
         },
          {id: 2,
           url: '/admin/class-schedule/list',
           title: 'List',
           icon: <Circle/>
         },
      ]
     },
     {id: 40,
      url: '#',
      title: 'Exercise',
      size: '140px',
      icon: <FileText/>,
      children: [
          {id: 1,
           url: '/admin/exercise/add',
           title: 'Add',
           icon: <Circle/>
         },
          {id: 2,
           url: '/admin/exercise/list',
           title: 'List',
           icon: <Circle/>
         },
      ]
     },
     {id: 50,
      url: '#',
      title: 'Bodyparts ',
      size: '140px',
      icon: <FileText/>,
      children: [
          {id: 1,
           url: '/admin/bodyparts/add',
           title: 'Add',
           icon: <Circle/>
         },
          {id: 2,
           url: '/admin/bodyparts/list',
           title: 'List',
           icon: <Circle/>
         },
      ]
     },
     {id: 51,
      url: '#',
      title: 'Equipments ',
      size: '140px',
      icon: <FileText/>,
      children: [
          {id: 1,
           url: '/admin/equipments/add',
           title: 'Add',
           icon: <Circle/>
         },
          {id: 2,
           url: '/admin/equipments/list',
           title: 'List',
           icon: <Circle/>
         },
      ]
     },
     {id: 52,
      url: '#',
      title: 'Levels ',
      size: '140px',
      icon: <FileText/>,
      children: [
          {id: 1,
           url: '/admin/levels/add',
           title: 'Add',
           icon: <Circle/>
         },
          {id: 2,
           url: '/admin/levels/list',
           title: 'List',
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
     size: '140px',
     icon: <CheckSquare/>,
     children: [
      {id: 1,
       url: '/admin/pos/sell',
       title: 'Sell',
       icon: <Circle/>
     },
      {id: 1,
       url: '/admin/pos/sell-list',
       title: 'Sell List',
       icon: <Circle/>
     },
     
  ]
    },
    {id: 7,
     url: '#',
     title: 'Nutriation/Diet',
     size: '140px',
     icon: <FileText/>,
     children: [
         {id: 1,
          url: '/admin/nutriation-or-diet/add',
          title: 'Add',
          icon: <Circle/>
        },
         {id: 2,
          url: '/admin/nutriation-or-diet/preview',
          title: 'Preview',
          icon: <Circle/>
        },
         
     ]
    }
  
]