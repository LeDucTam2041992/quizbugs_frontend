export const childRoutes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    data: { icon: 'dashboard', text: 'Dashboard' }
  },
  {
    path: 'examination',
    loadChildren: () =>
        import('./examination/examination.module').then(m => m.ExaminationModule),
    data: { icon: 'event_note', text: 'Examination' }
  },
  {
    path: 'history',
    loadChildren: () =>
        import('./exam-history/exam-history.module').then(m => m.ExamHistoryModule),
    data: { icon: 'history', text: 'History' }
  },

];
