import Major from './components/Major.vue';
import Student from './components/Student.vue';
import Home from './components/Home.vue';
import EditStudent from './components/EditStudent.vue';
import PostStudent from './components/PostStudent.vue'
import StudentByMajor from './components/StudentByMajor.vue'
const routes = [
    { path: '/', component: Home },
    { path: '/Major', component: Major },
    { path: '/Student', component: Student },
    { path: '/PostStudent', component: PostStudent},
    { path: '/studentbymajor/:major_id', component: StudentByMajor},
    { path: '/editstudent/:student_id', component: EditStudent},
];

export default routes;