import { OnDestroy, AfterViewChecked, AfterViewInit, AfterContentChecked, AfterContentInit, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
    //@Input() student: { type: string, name: string, description: string }
    @Input() type: string

    constructor() {

    }

    ngOnInit(): void {

    }

    ngOnChanges(changes: SimpleChanges) {

    }

    ngDoCheck() : void {
        console.log('ngdocheck');
    }

    ngAfterContentInit() : void {
        console.log('AfterContentInit');
    }

    ngAfterContentChecked() : void {
        console.log('ngAfterContentChecked');
    }

    ngAfterViewInit() : void {
        console.log('ngAfterViewInit');
    }

    ngAfterViewChecked() : void {
        console.log('ngAfterViewChecked');
    }

    ngOnDestroy() : void {
        console.log('ngOnDestroy');
    }
}
