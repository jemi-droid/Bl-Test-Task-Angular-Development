import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'; // Import RouterModule for routing
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DonutComponent } from './graphs/donut/donut.component';
import { DataService } from './services/data.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    SidebarComponent,
    DonutComponent,
    DashboardComponent,
  ],
  imports: [
    RouterModule.forChild([]), // Include RouterModule for routing
    NgbModule,
    CommonModule,
    HttpClientModule,

  ],
  exports: [
    DashboardComponent // Export the DashboardComponent
  ],
  providers: [
    DataService // Example service provided globally
  ],
  bootstrap: [] // Specify AppComponent for bootstrapping
})
export class AppModule { }
