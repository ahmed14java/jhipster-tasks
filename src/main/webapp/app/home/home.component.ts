import { ResponseWrapper } from '../shared/index';
import { Post, PostService } from '../entities/post/index';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'jhi-home',
    templateUrl: './home.component.html',
    styleUrls: [
        'home.css'
    ]

})
export class HomeComponent implements OnInit {

    posts: Post[] = [];

    constructor(private postService: PostService) { }

    loadAll() {
        this.postService.query().subscribe(
            (res: ResponseWrapper) => {
                console.log(res.json);
                this.posts = res.json;
            }, (res: ResponseWrapper) => {
                console.log(res.json);
            }
        );
    }

    ngOnInit() {
        console.log('ngOnInit...');
        this.loadAll();
    }
}
