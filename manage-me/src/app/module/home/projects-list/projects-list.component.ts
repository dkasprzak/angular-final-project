import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { ProjectService } from 'src/app/shared/services/project.service';
import { Project } from 'src/app/shared/models/project.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort = new MatSort();
  
  displayedColumns: string[] = ['id', 'Project Name', 'Description', 'actions'];
  dataSource!: MatTableDataSource<Project>;
  projects!: Project[];
  projectName!: string;

  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    private _projectService: ProjectService,
  ) { }

  ngOnInit(): void {
    this.getAllProjects();
  }

  public announceSortChange(sortState: Sort): void {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  private getAllProjects(): void {
    this._projectService.getAllProjects().subscribe((projects: Project[]) => {
      projects.map((project: Project) => {
          this.projectName = project.name;
      });
      this.projects = projects;
      this.dataSource = new MatTableDataSource(this.projects);
    });
  }

}
