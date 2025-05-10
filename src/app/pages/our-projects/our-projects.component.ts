import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-our-projects',
  imports: [],
  template: `<p>our-projects works!</p>`,
  styleUrl: './our-projects.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class OurProjectsComponent { }
