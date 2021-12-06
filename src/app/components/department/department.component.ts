import { Component, OnInit, ViewChild } from '@angular/core';
import { Tree } from '@app/shared/models';
import { SearchResponse } from '@app/shared/models/search.model';
import { ActiveService } from '@app/shared/services/active.service';
import { SearchService } from '@app/shared/services/search.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  @ViewChild('tree', { static: false }) tree;
  public nodeCounter: number = 0;
  public treeNodes: Tree[] = [];
  public selectedNode: Tree;

  constructor(private readonly searchService: SearchService, private activeService: ActiveService)
  {}

  ngOnInit(): void {
    this.searchService
    .getAllSearch()
    .subscribe((searchResponse) => {
      this.setTree(searchResponse);
    });
  }

  public setTree(_searchResponses: SearchResponse[]):void{
		let treeSearchResponses: Tree[] = [];
		_searchResponses.map((searchResponse) => {
				let treeNode:Tree = new Tree();
				treeNode.id = searchResponse.id;
				treeNode.parentId = searchResponse.parentId;
				treeNode.name = searchResponse.DepartmentName;
				treeNode.isExpanded = true;
				this.nodeCounter++;
				treeSearchResponses.push(treeNode)
		});

		const nest = (items, id = null, link = 'parentId') =>
		  items
			.filter(item => item[link] === id)
			.map(item => ({ ...item, children: nest(items, item.id) }));

		this.treeNodes =  nest(treeSearchResponses);
  }

  public onNodeSelected(node: Tree):void{
    this.selectedNode = node;
    this.activeService.sendSelect(node.name);
  }
}
