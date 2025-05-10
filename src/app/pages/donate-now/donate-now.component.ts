import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-donate-now',
  imports: [],
  template: `<p>donate-now works!</p>`,
  styleUrl: './donate-now.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DonateNowComponent { }
