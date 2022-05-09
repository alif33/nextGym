import Link from "next/link";
import AdminLayout from "../../../../src/components/AdminLayout/AdminLayout";
import Product from "../../../../src/components/Product/Product";
import { adminAuth } from "../../../../__lib__/helpers/requireAuthentication";

const SingleProduct = ({exerciseId}) =>{
    return(
        <AdminLayout>
        <div className="content-header row">
          <div className="content-header-left col-md-9 col-12 mb-2">
            <div className="row breadcrumbs-top">
              <div className="col-12">
                <h2 className="content-header-title float-start mb-0">Member</h2>
                <div className="breadcrumb-wrapper">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                    <Link href="/admin/dashboard">
                        <a>Dashboard</a>
                      </Link>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="#">Products</a>
                    </li>
                    <li className="breadcrumb-item active">
                     <Link href="/admin/product/list">
                     <a >Product lists</a>
                     </Link>
                    </li>
                    <li className="breadcrumb-item active">
                    {productId}
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="content-header-right text-md-end col-md-3 col-12 d-md-block d-none">
            <div className="mb-1 breadcrumb-right d-none">
             
            </div>
          </div>
        </div>
        <div className="content-body">
           <Product id={exerciseId}/>
        </div>
      </AdminLayout>
    );
};

export default SingleProduct;
export const getServerSideProps = adminAuth(context => {
    const {exerciseId} = context.params
    return {
        props: {
          exerciseId
        }
    }
  })