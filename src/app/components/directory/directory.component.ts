import { Component, OnInit } from '@angular/core';
import { DirectoryService } from '../../services/directory.service';
import { DirectoryListItem } from '../../models/directory';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
})
export class DirectoryComponent implements OnInit {
  directoryListings: DirectoryListItem[] = [];
  isSubDirectory: boolean = false;

  constructor(private directoryService: DirectoryService) {}

  ngOnInit(): void {
    this.getDirectoryListings();
  }

  getDirectoryListings(path?: string): void {
    this.directoryService.getDirectoryListings(path).subscribe(
      (data: string[]) => {
        this.directoryListings = data.map((item) => JSON.parse(item));
        if (path) {
          this.isSubDirectory = true;
        }
      },
      (error: string) => {
        console.error('Error fetching directory items:', error);
      }
    );
  }

  goBack(): void {
    this.getDirectoryListings();
    this.isSubDirectory = false;
  }
}
