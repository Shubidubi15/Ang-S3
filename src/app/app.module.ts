import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
//My Components
import { NavbarComponent } from "./navbar/navbar.component";
import { RecipeDetailComponent } from "./recipe-book/recipe-detail/recipe-detail.component";
import { RecipeBookComponent } from "./recipe-book/recipe-book.component.";
import { RecipeItemComponent } from "./recipe-book/recipe-list/recipe-item/recipe-item.component";
import { RecipeListComponent } from "./recipe-book/recipe-list/recipe-list.component";
import { ShoppingListEditComponent } from "./shopping-list/shopping-list-edit/shopping-list-edit.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RecipeBookComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeListComponent,
    ShoppingListComponent,
    ShoppingListEditComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
