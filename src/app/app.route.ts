import {GeneralTestComponent} from './DILearn/components/generalTest.component';
import {Test3Component} from './DILearn/components/test3.component';
import {PracticeExampleComponent} from './DILearn/components/practiceExample.component';
import {PracticeExample2Component} from './DILearn/components/practiceExample2.component';
import {InjectionTokenComponent} from './DILearn/injectionToken/injectionToken.component';
import {ViewEncExample1Component} from './viewEncapsulation/view-enc-example.component';
import {ViewEncRootComponent} from './viewEncapsulation/view-enc-root.component';
import {ViewEncRootNativeComponent} from './viewEncapsulation/view-enc-root-native.component';
import {ViewEncRootEmulatedComponent} from './viewEncapsulation/view-enc-root-emulated.component';
import {DecExample1Component} from './decorators/dec-example1.component';

export const appRoutes = [
  {
    path: '',
    component: GeneralTestComponent
  },
  {path: 'test3', component: Test3Component},
  {path: 'example1_car', component: PracticeExampleComponent},
  {path: 'example1_phone', component: PracticeExampleComponent},
  {path: 'singleton', component: PracticeExample2Component},
  {path: 'it', component: InjectionTokenComponent},
  {path: 'view-enc-none', component: ViewEncRootComponent},
  {path: 'view-enc-native', component: ViewEncRootNativeComponent},
  {path: 'view-enc-emulated', component: ViewEncRootEmulatedComponent},
  {path: 'dec-ex1', component: DecExample1Component}
];
