import {BrowserModule} from '@angular/platform-browser';
import {Injector, NgModule, TemplateRef} from '@angular/core';


import {AppComponent} from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AnimationComponent} from './directives/aniamtion/animation.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DependencyInjectionComponent} from './dependencyInjection/dependencyInjection.component';
import {TestComponent} from './DILearn/components/test.component';
import {Test2Component} from './DILearn/components/test2.component';
import {appRoutes} from './app.route';
import {RouterModule} from '@angular/router';
import {Test3Component} from './DILearn/components/test3.component';
import {GeneralTestComponent} from './DILearn/components/generalTest.component';
import {PracticeExampleComponent} from './DILearn/components/practiceExample.component';
import {Data4Service} from './DILearn/services/example2/data4.service';
import {PracticeExample2Component} from './DILearn/components/practiceExample2.component';
import {PracticeExample3Component} from './DILearn/components/practiceExample3.component';
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
import {MyIfDirective} from './ng-templates/my-if.directive';
import {TemplateParamsComponent, TemSpinnerExampleComponent} from './ng-templates/tem-spinner-example.component';
import {TemplateForExampleComponent} from './ng-templates/template-for-example.component';
import {DynamicComponent, DynamicHelloComponent} from './dynamic-components/dynamic.component';
import {TooltipContainerComponent} from 'ngx-bootstrap';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {Interceptor1, Interceptor2, InterceptorExamples1Component} from './Intercept/interceptor-examples-1';


@NgModule({
  declarations: [
    AppComponent, AnimationComponent, DependencyInjectionComponent,
    /*DI learn start*/
    TestComponent, Test2Component, Test3Component, GeneralTestComponent, PracticeExampleComponent,
    PracticeExample3Component, PracticeExample2Component, InjectionTokenComponent,
    /*DI learn end*/
    /*View Encapsulation stat*/
    ViewEncExample1Component, ViewEncRootComponent, ViewEncRootNativeComponent, ViewEncRootEmulatedComponent,
    /*View Encapsulation stat*/
    /*-*/
    DecExample1Component, DecExample2Component, DecJsonPropertyComponent,
    /*-*/
    /* | */
    Container1Ex1Component, TemplateEx1Component, CustomNgIfComponent, MyIfDirective, TemSpinnerExampleComponent,
    TemplateParamsComponent, TemplateForExampleComponent,
    /* || */
    /* /\ */
    DynamicComponent, DynamicHelloComponent,
    TooltipContainerComponent,
    /* \/ */
    /*-Interception start-*/
    InterceptorExamples1Component
    /*-Interception end-*/
  ],
  imports: [
    BrowserModule, ReactiveFormsModule, BrowserAnimationsModule, RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [Data4Service,
    {provide: HTTP_INTERCEPTORS, useClass: Interceptor1, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: Interceptor2, multi: true}
  ],
  bootstrap: [AppComponent],
  entryComponents: [DynamicHelloComponent]
})
export class AppModule {
  public static injector: Injector;

  constructor(private injector: Injector) {
    AppModule.injector = injector;
  }
}


