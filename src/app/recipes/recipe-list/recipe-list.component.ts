import { Component, OnInit } from '@angular/core';
import { Recipes } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipes[]
  constructor() { }

  ngOnInit() {
    this.recipes=[
      new Recipes('biryani','This dish is world famous','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThfBzKU_wkWuE0hl5Z1mIZiOfLnLg93GV9Oy9IgxI_SMidFrBR')
    ]
  }

}
