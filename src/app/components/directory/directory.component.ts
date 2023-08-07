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

  constructor(private directoryService: DirectoryService) {}

  ngOnInit(): void {
    this.directoryService.getDirectoryListings().subscribe(
      (data: string[]) => {
        this.directoryListings = data.map((item) => JSON.parse(item));
        console.log('asiphe dir: ', this.directoryListings);
      },
      (error: string) => {
        console.error('Error fetching directory items:', error);
      }
    );
  }
}
