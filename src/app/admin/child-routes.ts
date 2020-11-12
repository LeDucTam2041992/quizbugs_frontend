export const childRoutes = [
    {
        path: 'questions',
        loadChildren: () => import('./questions/question.module').then(m => m.QuestionModule),
        data: {icon: 'question_answer', text: 'Question'}
    },
    {
        path: 'categories',
        loadChildren: () => import('./category/category.module').then(m => m.CategoryModule),
        data: {icon: 'category', text: 'Category'}
    },
    {
        path: 'quizs',
        loadChildren: () => import('./quiz/quiz.module').then(m => m.QuizModule),
        data: {icon: 'insert_drive_file', text: 'Quiz'}
    },
    {
        path: 'management-user',
        loadChildren: () => import('./management-user/management-user.module').then(m => m.ManagementUserModule),
        data: {icon: 'supervisor_account', text: 'Management Users'}
    }
];
