import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {
    courses: Course[] = [];

ngOnInit():void{
    this.courses =[
        {
            id: 1,
            name: 'Angular: Forms',
            imageUrl: '/assets/images/forms.png',
            price: 99.99,
            code: 'XPS-8758',
            duration: 120,
            rating: 5.4,
            releaseData: 'November, 2, 2020'
        },
        {
            id: 2,
            name: 'Angular: HTTP',
            imageUrl: '/assets/images/http.png',
            price: 45.99,
            code: 'XPS-8759',
            duration: 80,
            rating: 4,
            releaseData: 'November, 4, 2020'
        },
        {
            id: 2,
            name: 'Angular: Rotas',
            imageUrl: '/assets/images/router.png',
            price: 45.99,
            code: 'XPS-8760',
            duration: 80,
            rating: 2.5,
            releaseData: 'December, 4, 2020'
        }
    ]
}

}