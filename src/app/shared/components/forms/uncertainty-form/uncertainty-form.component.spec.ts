import { ComponentFixture, TestBed } from "@angular/core/testing";

import { UncertaintyFormComponent } from "./uncertainty-form.component";

describe("UncertainityFormComponent", () => {
  let component: UncertaintyFormComponent;
  let fixture: ComponentFixture<UncertaintyFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [UncertaintyFormComponent],
    });
    fixture = TestBed.createComponent(UncertaintyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
