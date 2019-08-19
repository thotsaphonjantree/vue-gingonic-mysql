import Major from './components/Major.vue';
import Student from './components/Student.vue';
import Home from './components/Home.vue';
import PostStudent from './components/PostStudent.vue'
const routes = [
    { path: '/', component: Home },
    { path: '/Major', component: Major },
    { path: '/Student', component: Student },
    { path: '/PostStudent', component: PostStudent}
];

export default routes;