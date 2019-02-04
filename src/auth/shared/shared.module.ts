import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
// guards
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth/auth.service';

@NgModule({
	imports: [CommonModule, ReactiveFormsModule],
	declarations: [AuthFormComponent],
	exports: [AuthFormComponent],
})
export class SharedModule {
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: SharedModule,
			providers: [AuthService, AuthGuard],
		};
	}
}
