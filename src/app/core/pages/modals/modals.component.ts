import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  ViewContainerRef,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzModalService, NzModalModule } from 'ng-zorro-antd/modal';
import { IlluminationResultComponent } from 'src/app/shared/modals/illumination-result/illumination-result.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-modals',
  standalone: true,
  imports: [CommonModule, NzButtonModule, NzModalModule, NzGridModule],
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalsComponent implements OnDestroy {
  private readonly modalService = inject(NzModalService);
  private readonly containerRef = inject(ViewContainerRef);
  private readonly destroyRef$ = new Subject<boolean>();

  createIlluminationModal(): void {
    const modal = this.modalService.create({
      nzTitle: 'Ввод значений',
      nzContent: IlluminationResultComponent,
      nzCentered: true,
      nzWidth: '600px',
      nzViewContainerRef: this.containerRef,
      nzClosable: true,
    });
    modal.afterClose
      .pipe(takeUntil(this.destroyRef$))
      .subscribe((res) => console.log(res));
  }

  ngOnDestroy(): void {
    this.destroyRef$.next(true);
    this.destroyRef$.complete();
  }
}
