import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { AuthenticationService } from '../../../../core/auth/authentication.service';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { forEach } from '@angular/router/src/utils/collection';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[];
  reportId: string;
  getProductList;
  loading: boolean;
  constructor(
    private _change: ChangeDetectorRef,
    private _authService: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    // this.route.params.subscribe(params => (this.reportId = params.id));
    // this.ProductList()
  }
  // ProductList() {
  //   this.loading = true;
  //   try {
  //     this._authService.getTypeAjax(`/seller/GetProductReportById/A2WR6NEBQYUU6E/${this.reportId}`).subscribe(res => {
  //       this.loading = false;
  //       this.getProductList = res['data']
  //       const data = [
  //         'asin1',
  //         'item-name',
  //         "seller-sku",
  //         "quantity",
  //         "price",
  //         "inbound"
  //       ]
  //       this.displayedColumns = data;
  //       this.dataSource = new MatTableDataSource(this.getProductList);
  //       this.dataSource.paginator = this.paginator;
  //       this.dataSource.sort = this.sort;
  //     })
  //   }
  //   catch (e) {
  //     this.loading = false;
  //   }
  // }
  // GetMatchingProduct(element) {
  //   this.router.navigate(["/product-by-id", element['seller-sku']]);
  // }
}
