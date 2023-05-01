import React, { useState } from 'react';
import { json, Link } from 'react-router-dom';

export default function ShippingOrderSearchPage() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [customerName, setCustomerName] = useState('');
  const [customerContactEmail, setCustomerContactEmail] = useState('');
  const [purchaseOrderNumber, setPurchaseOrderNumber] = useState('');

  const shippingOrderLookupReq = {
    customerName: customerName,
    customerContactEmail: customerContactEmail,
    purchaseOrderNumber: purchaseOrderNumber,
  };

  console.log('URL: ' + process.env.REACT_APP_GRAPHQL_ROUTER_URL);
  console.log('Secret: ' + process.env.REACT_APP_AUTH0_DOMAIN);
  const handleClick = () => {
    if (
      (customerName && customerName.length > 0) ||
      (customerContactEmail && customerContactEmail.length > 0) ||
      (purchaseOrderNumber && purchaseOrderNumber.length > 0)
    ) {
      fetch(
        //process.env.REACT_APP_SERVICE_VIEW_API_URL + 'shipping_order/search',
        process.env.REACT_APP_GRAPHQL_ROUTER_URL,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            //Authorization: 'Bearer ' + process.env.REACT_APP_SERVICE_API_TOKEN,
          },
          body: JSON.stringify({
            query: `
              query shippingOrders(
                $shippingOrderLookupReq: ShippingOrderLookupReq
              ) {
                shippingOrders(shippingOrderLookupReq: $shippingOrderLookupReq) {
                  shippingOrderId
                  shippingOrderStatus
                  customerName
                  purchaseOrderNumber
                  shippingOption
                  updateAt
                  shippingSourceAddress {
                    city
                    countryCode
                  }
                  shippingDestinationAddress {
                    city
                    countryCode
                  }
                  packageDetail {
                    productName
                    productQuantity
                  }
                  options {
                    shippingMethod
                    destinationPort
                    incoterms
                  }
                }
              }
            `,
            variables: {
              shippingOrderLookupReq,
            },
          }),
        }
      )
        .then((response) => {
          if (!response.ok) {
            console.error('Error searching shipping order: ' + response.errors);
            setData([]);
            setError(error);
            throw json(
              { message: 'Could not search shipping order.' },
              { status: 500 }
            );
          }

          return response.json();
        })
        .then((data) => {
          //console.log(data.data.shippingOrders);
          setData(data.data.shippingOrders);
          setError(null);
        })
        .catch((error) => {
          setData([]);
          setError(error);
        });
    }
  };
  const handleCustomerNameChange = (event) => {
    setCustomerName(event.target.value);
  };
  const handleCustomerContactEmailChange = (event) => {
    setCustomerContactEmail(event.target.value);
  };
  const handlePurchaseOrderNumberlChange = (event) => {
    setPurchaseOrderNumber(event.target.value);
  };

  return (
    <div className="container">
      <div className="card-header fs-5"></div>
      <div className="card border border-3">
        <div className="card-header text-start fs-5">
          Search Shipping Order - Provide either Customer name or Email or PO
          Number
        </div>
        <div className="card-body">
          <div className="row g-3 needs-validation" novalidation="true">
            <div className="col-md-4">
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" name="basic-addon1">
                    <i className="bi bi-person-badge-fill"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="First and Last Name"
                  name="customerName"
                  value={customerName}
                  required
                  onChange={handleCustomerNameChange}
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" name="basic-addon1">
                    <i className="bi bi-envelope-at-fill"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email Address"
                  name="customerContactEmail"
                  required
                  value={customerContactEmail}
                  onChange={handleCustomerContactEmailChange}
                />
              </div>
            </div>

            <div className="col-md-4">
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" name="basic-addon1">
                    <i className="bi bi-upc-scan"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="PO Number e.g. POAAA-12345678"
                  name="purchaseOrderNumber"
                  required
                  value={purchaseOrderNumber}
                  onChange={handlePurchaseOrderNumberlChange}
                />
              </div>
            </div>

            <div className="col-12">
              <button onClick={handleClick} className="btn btn-primary">
                Submit Search Request
              </button>
            </div>
          </div>
        </div>
      </div>
      <p></p>
      <p></p>
      <table className="table table-success table-striped ">
        {data.length > 0 && (
          <thead>
            <tr>
              <th scope="col">Customer Name</th>
              <th scope="col">PO Number</th>
              <th scope="col">Shipping Option</th>
              <th scope="col">Updated At</th>
              <th scope="col">Source City/Country</th>
              <th scope="col">Destination City/Country</th>
              <th scope="col">Product</th>
              <th scope="col">Quantity</th>
              <th scope="col">Shipping Method</th>
              <th scope="col">Destination Port</th>
              <th scope="col">Documentation</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
        )}
        {data.map((item) => (
          <tbody key={item.shippingOrderId}>
            <tr>
              <th scope="row">{item.customerName}</th>
              <td>
                <Link to={`/shippingOrder/${item.shippingOrderId}`}>
                  {item.purchaseOrderNumber}
                </Link>
              </td>
              <td>{item.shippingOption}</td>
              <td>{item.updateAt}</td>
              <td>
                {item.shippingSourceAddress.city}/
                {item.shippingSourceAddress.countryCode}
              </td>
              <td>
                {item.shippingDestinationAddress.city}/
                {item.shippingDestinationAddress.countryCode}
              </td>
              <td>{item.packageDetail.productName}</td>
              <td>{item.packageDetail.productQuantity}</td>
              <td>{item.options.shippingMethod}</td>
              <td>{item.options.destinationPort}</td>
              <td>{item.options.incoterms}</td>
              <td>{item.shippingOrderStatus}</td>
            </tr>
          </tbody>
        ))}
      </table>
      {!(data.length > 0) && <p className="fs-5">No Shipping Order found..</p>}
    </div>
  );
}
