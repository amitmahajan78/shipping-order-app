import React from 'react';

export default function ShippingOrder({ shippingOrder }) {
  console.info(shippingOrder.shippingOrderStatus);
  return (
    <div>
      <div className="container">
        <div className="text-start fs-3">Shipping Order</div>
        <p></p>
        <div className="card border border-3">
          <div className="card-header text-start fs-5">
            Shipping Order Progress
          </div>
          <div className="card-body">
            <div className="row g-3">
              <div className="col-md-12">
                <img
                  src={'/images/' + shippingOrder.shippingOrderStatus + '.png'}
                  alt="Order Progress"
                  style={{ maxWidth: '100%', width: 'auto' }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="card border border-3">
          <div className="card-header text-start fs-5">Shipping Details</div>
          <div className="card-body">
            <div className="row g-3 needs-validation" novalidation="true">
              <div className="col-md-3">
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" name="basic-addon1">
                      <i className="bi bi-person-badge-fill"></i>
                    </span>
                  </div>
                  <span className="input-group-text" name="basic-addon1">
                    {shippingOrder.customerName}
                  </span>
                </div>
              </div>
              <div className="col-md-3">
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" name="basic-addon1">
                      <i className="bi bi-envelope-at-fill"></i>
                    </span>
                  </div>
                  <span className="input-group-text" name="basic-addon1">
                    {shippingOrder.customerContactEmail}
                  </span>
                </div>
              </div>
              <div className="col-6">
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" name="basic-addon1">
                      <i className="bi bi-house-fill"></i>
                    </span>
                  </div>
                  <span className="input-group-text" name="basic-addon1">
                    {shippingOrder.customerAddress}
                  </span>
                </div>
              </div>

              <div className="col-md-3">
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" name="basic-addon1">
                      <i className="bi bi-upc-scan"></i>
                    </span>
                  </div>
                  <span className="input-group-text" name="basic-addon1">
                    {shippingOrder.purchaseOrderNumber}
                  </span>
                </div>
              </div>
              <div className="col-md-3">
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" name="basic-addon1">
                      <i className="bi bi-telephone-fill"></i>
                    </span>
                  </div>
                  <span className="input-group-text" name="basic-addon1">
                    {shippingOrder.customerContactPhone}
                  </span>
                </div>
              </div>

              <div className="col-md-6">
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" name="basic-addon1">
                      <i className="bi bi-postage-fill"></i>
                    </span>
                  </div>
                  <span className="input-group-text" name="basic-addon1">
                    Shipping Option :: {shippingOrder.shippingOption}
                  </span>
                </div>
              </div>

              <div className="card-header text-start fs-5">
                Shipping From (Source Details)
              </div>
              <div className="col-md-4">
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" name="basic-addon1">
                      <i className="bi bi-person-badge-fill"></i>
                    </span>
                  </div>
                  <span className="input-group-text" name="basic-addon1">
                    {shippingOrder.shippingSourceAddress.name}
                  </span>
                </div>
              </div>
              <div className="col-md-4">
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" name="basic-addon1">
                      <i className="bi bi-envelope-at-fill"></i>
                    </span>
                  </div>
                  <span className="input-group-text" name="basic-addon1">
                    {shippingOrder.shippingSourceAddress.email}
                  </span>
                </div>
              </div>
              <div className="col-md-4">
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" name="basic-addon1">
                      <i className="bi bi-telephone-fill"></i>
                    </span>
                  </div>
                  <span className="input-group-text" name="basic-addon1">
                    {shippingOrder.shippingSourceAddress.phone}
                  </span>
                </div>
              </div>
              <div className="col-md-4">
                <div className="input-group mb-3">
                  <span className="input-group-text" name="basic-addon1">
                    Address Line :: {shippingOrder.shippingSourceAddress.line}
                  </span>
                </div>
              </div>
              <div className="col-md-2">
                <div className="input-group mb-3">
                  <span className="input-group-text" name="basic-addon1">
                    City :: {shippingOrder.shippingSourceAddress.city}
                  </span>
                </div>
              </div>
              <div className="col-md-2">
                <div className="input-group mb-3">
                  <span className="input-group-text" name="basic-addon1">
                    State :: {shippingOrder.shippingSourceAddress.state}
                  </span>
                </div>
              </div>
              <div className="col-md-2">
                <div className="input-group mb-3">
                  <span className="input-group-text" name="basic-addon1">
                    Post Code ::{' '}
                    {shippingOrder.shippingSourceAddress.postalCode}
                  </span>
                </div>
              </div>
              <div className="col-md-2">
                <div className="input-group mb-3">
                  <span className="input-group-text" name="basic-addon1">
                    Country (ISO) ::{' '}
                    {shippingOrder.shippingSourceAddress.countryCode}
                  </span>
                </div>
              </div>

              <div className="card-header text-start fs-5">
                Shipping To (Destination Details)
              </div>
              <div className="col-md-4">
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" name="basic-addon1">
                      <i className="bi bi-person-badge-fill"></i>
                    </span>
                  </div>
                  <span className="input-group-text" name="basic-addon1">
                    {shippingOrder.shippingDestinationAddress.name}
                  </span>
                </div>
              </div>
              <div className="col-md-4">
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" name="basic-addon1">
                      <i className="bi bi-envelope-at-fill"></i>
                    </span>
                  </div>
                  <span className="input-group-text" name="basic-addon1">
                    {shippingOrder.shippingDestinationAddress.email}
                  </span>
                </div>
              </div>
              <div className="col-md-4">
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" name="basic-addon1">
                      <i className="bi bi-telephone-fill"></i>
                    </span>
                  </div>
                  <span className="input-group-text" name="basic-addon1">
                    {shippingOrder.shippingDestinationAddress.phone}
                  </span>
                </div>
              </div>
              <div className="col-md-4">
                <div className="input-group mb-3">
                  <span className="input-group-text" name="basic-addon1">
                    Address Line ::{' '}
                    {shippingOrder.shippingDestinationAddress.line}
                  </span>
                </div>
              </div>
              <div className="col-md-2">
                <div className="input-group mb-3">
                  <span className="input-group-text" name="basic-addon1">
                    City :: {shippingOrder.shippingDestinationAddress.city}
                  </span>
                </div>
              </div>
              <div className="col-md-2">
                <div className="input-group mb-3">
                  <span className="input-group-text" name="basic-addon1">
                    State :: {shippingOrder.shippingDestinationAddress.state}
                  </span>
                </div>
              </div>
              <div className="col-md-2">
                <div className="input-group mb-3">
                  <span className="input-group-text" name="basic-addon1">
                    Post Code ::{' '}
                    {shippingOrder.shippingDestinationAddress.postalCode}
                  </span>
                </div>
              </div>
              <div className="col-md-2">
                <div className="input-group mb-3">
                  <span className="input-group-text" name="basic-addon1">
                    Country (ISO) ::{' '}
                    {shippingOrder.shippingDestinationAddress.countryCode}
                  </span>
                </div>
              </div>

              <div className="card-header text-start fs-5">Package Details</div>
              <div className="col-md-3">
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" name="basic-addon1">
                      <i className="bi  bi-box-fill"></i>
                    </span>
                  </div>
                  <span className="input-group-text" name="basic-addon1">
                    {shippingOrder.packageDetail.productName}
                  </span>
                </div>
              </div>

              <div className="col-md-3">
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" name="basic-addon1">
                      <i className="bi  bi-plus-slash-minus"></i>
                    </span>
                  </div>
                  <span className="input-group-text" name="basic-addon1">
                    {shippingOrder.packageDetail.productQuantity}
                  </span>
                </div>
              </div>
              <div className="col-md-3">
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" name="basic-addon1">
                      <i className="bi  bi-align-center"></i>
                    </span>
                  </div>
                  <span className="input-group-text" name="basic-addon1">
                    {shippingOrder.packageDetail.weightValue}
                  </span>
                </div>
              </div>
              <div className="col-md-3">
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" name="basic-addon1">
                      <i className="bi  bi-unity"></i>
                    </span>
                  </div>
                  <span className="input-group-text" name="basic-addon1">
                    {shippingOrder.packageDetail.weightUnit}
                  </span>
                </div>
              </div>

              <div className="card-header text-start fs-5">
                Package Dimensions
              </div>
              <div className="col-md-3">
                <div className="input-group mb-3">
                  <span className="input-group-text" name="basic-addon1">
                    Length :: {shippingOrder.packageDetail.length}
                  </span>
                </div>
              </div>
              <div className="col-md-3">
                <div className="input-group mb-3">
                  <span className="input-group-text" name="basic-addon1">
                    Width :: {shippingOrder.packageDetail.width}
                  </span>
                </div>
              </div>
              <div className="col-md-3">
                <div className="input-group mb-3">
                  <span className="input-group-text" name="basic-addon1">
                    Height :: {shippingOrder.packageDetail.height}
                  </span>
                </div>
              </div>

              <div className="col-md-3">
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" name="basic-addon1">
                      <i className="bi  bi-unity"></i>
                    </span>
                  </div>
                  <span className="input-group-text" name="basic-addon1">
                    Dimension Unit ::{' '}
                    {shippingOrder.packageDetail.dimensionUnit}
                  </span>
                </div>
              </div>

              <div className="card-header text-start fs-5">
                Other Shipping Options
              </div>
              <div className="col-md-3">
                <div className="input-group mb-3">
                  <span className="input-group-text" name="basic-addon1">
                    Insurance Amount :: {shippingOrder.options.insuranceAmount}
                  </span>
                </div>
              </div>
              <div className="col-md-3">
                <div className="input-group mb-3">
                  <span className="input-group-text" name="basic-addon1">
                    Insurance Currency ::{' '}
                    {shippingOrder.options.insuranceCurrency}
                  </span>
                </div>
              </div>
              <div className="col-md-3">
                <div className="input-group mb-3">
                  <span className="input-group-text" name="basic-addon1">
                    Signature Required? ::{' '}
                    {shippingOrder.options.signatureRequired}
                  </span>
                </div>
              </div>
              <div className="col-md-3">
                <div className="input-group mb-3">
                  <span className="input-group-text" name="basic-addon1">
                    Incoterms :: {shippingOrder.options.incoterms}
                  </span>
                </div>
              </div>
              <div className="col-md-4">
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" name="basic-addon1">
                      <i className="bi bi-airplane-fill"></i>
                    </span>
                  </div>
                  <span className="input-group-text" name="basic-addon1">
                    {shippingOrder.options.shippingMethod}
                  </span>
                </div>
              </div>
              <div className="col-md-4">
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" name="basic-addon1">
                      <i className="bi bi-flag-fill"></i>
                    </span>
                  </div>
                  <span className="input-group-text" name="basic-addon1">
                    {shippingOrder.options.destinationPort}
                  </span>
                </div>
              </div>
              <div className="col-md-4">
                <div className="input-group mb-3">
                  <span className="input-group-text" name="basic-addon1">
                    Payment Term ::{' '}
                    {shippingOrder.paymentTerm && shippingOrder.paymentTerm}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
