import { atom } from "jotai";

const sidebarData = atom([
    { name: 'Dashboard', icon: 'fa fa-dashboard mr-1', link: '/admin/dashboard', isActive: true },
    { name: 'Users', icon: 'fa fa-users mr-1', link: '/admin/dashboard/users', isActive: false },
    { name: 'Loans', icon: 'fa fa-credit-card mr-1', link: '/admin/dashboard/loans', isActive: false },
    { name: 'Cash Mailing', icon: 'fa fa-paper-plane mr-1', link: '/admin/dashboard/cash-mailing', isActive: false },
    { name: 'Transfers', icon: 'fa fa-share-alt-square mr-1', link: '/admin/dashboard/transfers', isActive: false },
    { name: 'Messages', icon: 'fa fa-comments mr-1', link: '/admin/dashboard/messages', isActive: false },
    { name: 'settings', icon: 'fa fa-gear mr-1 ', link: '/admin/dashboard/settings', isActive: false }
])

export default sidebarData