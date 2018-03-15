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
import {DecExample2Component} from './decorators/dec-example2.component';
import {DecJsonPropertyComponent} from './decorators/dec-jsonProperty.component';
import {TemplateEx1Component} from './ng-templates/template-ex1.component';
import {Container1Ex1Component} from './ng-templates/container-ex1.component';
import {CustomNgIfComponent} from './ng-templates/custom-ng-if.component';
import {TemSpinnerExampleComponent} from './ng-templates/tem-spinner-example.component';
import {TemplateForExampleComponent} from './ng-templates/template-for-example.component';

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
  {path: 'dec-ex1', component: DecExample1Component},
  {path: 'dec-ex2', component: DecExample2Component},
  {path: 'dec-json-prop', component: DecJsonPropertyComponent},
  {path: 'template-ex1', component: TemplateEx1Component},
  {path: 'container-ex1', component: Container1Ex1Component},
  {path: 'ng-if', component: CustomNgIfComponent},
  {path: 'spinner', component: TemSpinnerExampleComponent},
  {path: 'template-for', component: TemplateForExampleComponent}
];
