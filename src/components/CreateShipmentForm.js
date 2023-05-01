import {
  Form,
  useActionData,
  useNavigation,
  redirect,
  json,
} from 'react-router-dom';

export default function CreateShipmentForm({ method, event }) {
  const data = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <Form method={method}>
      {data && data.errors && (
        <ul>
          {Object.values(data.errors).map((err) => (
            <li key={err}>{err}</li>
          ))}
        </ul>
      )}
      <div className="container">
        <div className="text-start fs-3">Create Shipping Order</div>
        <p></p>
        <div className="card border border-3">
          <div className="card-header text-start fs-5">Shipping Details</div>
          <div className="card-body">
            <div className="row g-3 needs-validation" novalidation="true">
              <div className="col-md-6">
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
                    required
                  />

                  {/* <input
                    type="hidden"
                    className="form-control"
                    placeholder="token"
                    name="token"
                    value={getAccessTokenSilently}
                    required
                  /> */}
                </div>
              </div>
              <div className="col-md-6">
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
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" name="basic-addon1">
                      <i className="bi bi-house-fill"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Customer address with address line, city post code and country"
                    name="customerAddress"
                    required
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
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" name="basic-addon1">
                      <i className="bi bi-telephone-fill"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone Number e.g. 447665544345"
                    name="customerContactPhone"
                    required
                  />
                </div>
              </div>

              <div className="col-md-4">
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" name="basic-addon1">
                      <i className="bi bi-postage-fill"></i>
                    </span>
                  </div>
                  <select
                    name="shippingOption"
                    className="form-select"
                    required
                  >
                    <option value="">Select Shipping Option</option>
                    <option>Express</option>
                    <option>Standard</option>
                    <option>Economy</option>
                    <option>Priority</option>
                    <option>Freight</option>
                  </select>
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
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First and Last Name"
                    name="shipFrom.name"
                    required
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
                    name="shipFrom.email"
                    required
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" name="basic-addon1">
                      <i className="bi bi-telephone-fill"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone Number e.g. 447665544345"
                    name="shipFrom.phone"
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Address line"
                    name="shipFrom.address.line"
                    required
                  />
                </div>
              </div>
              <div className="col-md-2">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="City"
                    name="shipFrom.address.city"
                    required
                  />
                </div>
              </div>
              <div className="col-md-2">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="State"
                    name="shipFrom.address.state"
                  />
                </div>
              </div>
              <div className="col-md-2">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Post Code"
                    name="shipFrom.address.postalCode"
                    required
                  />
                </div>
              </div>
              <div className="col-md-2">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Country (ISO)"
                    name="shipFrom.address.countryCode"
                    required
                  />
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
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First and Last Name"
                    name="shipTo.name"
                    required
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
                    name="shipTo.email"
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" name="basic-addon1">
                      <i className="bi bi-telephone-fill"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone Number e.g. 447665544345"
                    name="shipTo.phone"
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Address line"
                    name="shipTo.address.line"
                    required
                  />
                </div>
              </div>
              <div className="col-md-2">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="City"
                    name="shipTo.address.city"
                    required
                  />
                </div>
              </div>
              <div className="col-md-2">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="State"
                    name="shipTo.address.state"
                  />
                </div>
              </div>
              <div className="col-md-2">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Post Code"
                    name="shipTo.address.postalCode"
                    required
                  />
                </div>
              </div>
              <div className="col-md-2">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Country (ISO)"
                    name="shipTo.address.countryCode"
                    required
                  />
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
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Package Name"
                    name="packageDetails.productName"
                    required
                  />
                </div>
              </div>

              <div className="col-md-3">
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" name="basic-addon1">
                      <i className="bi  bi-plus-slash-minus"></i>
                    </span>
                  </div>
                  <select
                    name="packageDetails.productQuantity"
                    className="form-select"
                    required
                  >
                    <option value="">Select no. of packages</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
              </div>
              <div className="col-md-3">
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" name="basic-addon1">
                      <i className="bi  bi-align-center"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Package Weight e.g. 10"
                    name="packageDetails.weight.value"
                  />
                </div>
              </div>
              <div className="col-md-3">
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" name="basic-addon1">
                      <i className="bi  bi-unity"></i>
                    </span>
                  </div>
                  <select
                    name="packageDetails.weight.unit"
                    className="form-select"
                  >
                    <option defaultValue>Select Weight Unit</option>
                    <option>KG</option>
                  </select>
                </div>
              </div>

              <div className="card-header text-start fs-5">
                Package Dimensions
              </div>
              <div className="col-md-3">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Package length e.g. 10"
                    name="packageDetails.dimensions.length"
                  />
                </div>
              </div>
              <div className="col-md-3">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Package width e.g. 5"
                    name="packageDetails.dimensions.width"
                  />
                </div>
              </div>
              <div className="col-md-3">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Package height e.g. 3"
                    name="packageDetails.dimensions.height"
                  />
                </div>
              </div>

              <div className="col-md-3">
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" name="basic-addon1">
                      <i className="bi  bi-unity"></i>
                    </span>
                  </div>
                  <select
                    name="packageDetails.dimensions.unit"
                    className="form-select"
                  >
                    <option defaultValue>Select package dimension unit</option>
                    <option value="IN">Inches</option>
                    <option value="CM">Centimeter</option>
                  </select>
                </div>
              </div>

              <div className="card-header text-start fs-5">
                Other Shipping Options
              </div>
              <div className="col-md-2">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Insurance amount e.g. 200"
                    name="options.insurance.amount"
                  />
                </div>
              </div>
              <div className="col-md-3">
                <div className="input-group mb-3">
                  <select
                    name="options.insurance.currency"
                    className="form-select"
                  >
                    <option defaultValue>
                      Select Insurance Amount Currency
                    </option>
                    <option>INR</option>
                    <option>GBP</option>
                    <option>USD</option>
                  </select>
                </div>
              </div>
              <div className="col-md-2">
                <div className="input-group mb-3">
                  <select
                    name="options.signatureRequired"
                    className="form-select"
                  >
                    <option defaultValue>Is signature required?</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                  </select>
                </div>
              </div>
              <div className="col-md-5">
                <div className="input-group mb-3">
                  <select
                    name="options.incoterms"
                    className="form-select"
                    required
                  >
                    <option value="">
                      Select International Commercial Terms
                    </option>
                    <option value="EXW">EXW (Ex Works)</option>
                    <option value="FOB">FOB (Free on Board)</option>
                    <option value="CIF">
                      CIF (Cost, Insurance, and Freight)
                    </option>
                    <option value="DAP">DAP (Delivered at Place)</option>
                    <option value="DDP">DDP (Delivered Duty Paid)</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" name="basic-addon1">
                      <i className="bi bi-airplane-fill"></i>
                    </span>
                  </div>
                  <select name="options.shippingMethod" className="form-select">
                    <option value="SEA_FREIGHT">Sea Fright</option>
                    <option value="AIR_FREIGHT">Air Fright</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" name="basic-addon1">
                      <i className="bi bi-flag-fill"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Provide destination port"
                    name="options.destinationPort"
                  />
                </div>
              </div>

              <div className="col-12">
                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="btn btn-primary"
                >
                  {isSubmitting
                    ? 'Creating Shipping Order...'
                    : 'Create Shipment Order'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Form>
  );
}

export async function action({ request, params }) {
  const method = request.method;
  const data = await request.formData();

  const shipmentOrder = {
    customerName: data.get('customerName'),
    customerAddress: data.get('customerAddress'),
    customerContactEmail: data.get('customerContactEmail'),
    customerContactPhone: data.get('customerContactPhone'),
    purchaseOrderNumber: data.get('purchaseOrderNumber'),
    shippingOption: data.get('shippingOption'),
    shipFrom: {
      name: data.get('shipFrom.name'),
      address: {
        line: data.get('shipFrom.address.line'),
        city: data.get('shipFrom.address.city'),
        state: data.get('shipFrom.address.state'),
        postalCode: data.get('shipFrom.address.postalCode'),
        countryCode: data.get('shipFrom.address.countryCode'),
      },
      email: data.get('shipFrom.email'),
      phone: data.get('shipFrom.phone'),
    },
    shipTo: {
      name: data.get('shipTo.name'),
      address: {
        line: data.get('shipTo.address.line'),
        city: data.get('shipTo.address.city'),
        state: data.get('shipTo.address.state'),
        postalCode: data.get('shipTo.address.postalCode'),
        countryCode: data.get('shipTo.address.countryCode'),
      },
      email: data.get('shipTo.email'),
      phone: data.get('shipTo.phone'),
    },
    packageDetails: {
      productName: data.get('packageDetails.productName'),
      productQuantity: data.get('packageDetails.productQuantity'),
      weight: {
        value: data.get('packageDetails.weight.value'),
        unit: data.get('packageDetails.weight.unit'),
      },
      dimensions: {
        length: data.get('packageDetails.dimensions.length'),
        width: data.get('packageDetails.dimensions.width'),
        height: data.get('packageDetails.dimensions.height'),
        unit: data.get('packageDetails.dimensions.unit'),
      },
    },
    options: {
      insurance: {
        amount: data.get('options.insurance.amount'),
        currency: data.get('options.insurance.currency'),
      },
      shippingMethod: data.get('options.shippingMethod'),
      destinationPort: data.get('options.destinationPort'),
      signatureRequired: data.get('options.signatureRequired'),
      incoterms: data.get('options.incoterms'),
    },
  };

  /*   const shipmentOrder = {
    customerName: 'John DoeTest',
    customerAddress: '123 Main Street, Anytown, USA',
    customerContactEmail: 'johndoe@email.com',
    customerContactPhone: '+447886756876',
    purchaseOrderNumber: 'POAAA-12345678',
    shipFrom: {
      name: 'John Doe',
      address: {
        line: '123 Main St',
        city: 'New York',
        state: 'NY',
        postalCode: '10001',
        countryCode: 'US',
      },
      email: 'john.doe@example.com',
      phone: '+1-555-555-5555',
    },
    shipTo: {
      name: 'Jane Smith',
      address: {
        line: '456 Park Ave',
        city: 'London',
        postalCode: 'W1K 1QD',
        countryCode: 'GB',
      },
      email: 'jane.smith@example.com',
      phone: '+44-20-5555-5555',
    },
    packageDetails: {
      productName: 'Widget',
      productQuantity: 10,
      weight: {
        value: 1,
        unit: 'kg',
      },
      dimensions: {
        length: 10,
        width: 5,
        height: 3,
        unit: 'IN',
      },
    },
    shippingOption: 'express',
    options: {
      insurance: {
        amount: 100,
        currency: 'USD',
      },
      shippingMethod: 'SEA_FREIGHT',
      destinationPort: 'Port of Los Angeles',
      signatureRequired: true,
      incoterms: 'FOB',
    },
  }; */

  const authBody = {
    client_id: process.env.REACT_APP_AUTH0_CLIENT_ID,
    client_secret: process.env.REACT_APP_AUTH0_CLIENT_SECRET,
    audience: 'http://logistics/resource/app',
    grant_type: 'client_credentials',
  };

  const authResponse = await fetch(process.env.REACT_APP_AUTH0_DOMAIN, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(authBody),
  });
  const authData = await authResponse.json();

  let url = process.env.REACT_APP_SERVICE_API_URL + 'shipping_order';
  console.log('creating actions :: ' + data.get('token'));
  const response = await fetch(url, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + authData.access_token, //process.env.REACT_APP_SERVICE_API_TOKEN,
    },
    body: JSON.stringify(shipmentOrder),
  });

  if (response.status === 401) {
    throw json(
      {
        message:
          'Authentication error while creating shipping order' +
          response.errors,
      },
      { status: 401 }
    );
  }

  if (response.status === 400) {
    throw json(
      {
        message:
          'Validation error while creating shipping order' + response.errors,
      },
      { status: 400 }
    );
  }

  if (!response.ok) {
    console.error('Error creating shipping order: ' + response.errors);
    throw json(
      { message: 'Could not create shipping order.' + response.errors },
      { status: 500 }
    );
  }
  const resData = await response.json();
  localStorage.setItem(
    'newShippingOrderRes',
    JSON.stringify({
      orderId: resData.orderId,
      status: resData.status,
      message: resData.message,
    })
  );
  return redirect('/shippingOrderConfirmation');
}
