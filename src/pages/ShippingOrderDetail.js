import React from 'react';
import { useParams } from 'react-router-dom';
import ShippingOrder from '../components/ShippingOrder';
import { gql, useQuery } from '@apollo/client';
import Spinner from '../components/Spinner';
import { Error } from '../components/ErrorGraph';

export default function ShippingOrderDetail() {
  // const data = useLoaderData();
  const { shippingOrderId } = useParams();

  const { loading, error, data } = useQuery(GET_SHIPPING_ORDER_DETAIL, {
    variables: { shippingOrderId },
  });

  if (error) return <Error error={error.message} />;
  if (loading) return <Spinner />;

  if (!data) {
    return <p>Nothing to show...</p>;
  }

  if (data) {
    return <ShippingOrder shippingOrder={data.shippingOrder} />;
  }
}

export const GET_SHIPPING_ORDER_DETAIL = gql`
  query getShippingOrderDetails($shippingOrderId: String!) {
    shippingOrder(shippingOrderId: $shippingOrderId) {
      shippingOrderId
      shippingOrderStatus
      customerName
      customerAddress
      customerContactEmail
      customerContactPhone
      purchaseOrderNumber
      shippingOption
      paymentTerm
      updateAt
      shippingOrderStatuses {
        status
        message
        createdAt
      }
      shippingSourceAddress {
        name
        line
        city
        state
        postalCode
        countryCode
        email
        phone
      }
      shippingDestinationAddress {
        name
        line
        city
        state
        postalCode
        countryCode
        email
        phone
      }
      packageDetail {
        productName
        productQuantity
        weightValue
        weightUnit
        length
        width
        height
        dimensionUnit
      }
      options {
        shippingMethod
        destinationPort
        signatureRequired
        incoterms
        insuranceAmount
        insuranceCurrency
      }
    }
  }
`;

/* export async function loader({ request, params }) {
  const id = params.shippingOrderId;

  //const response = await fetch('http://localhost:8080/events/' + id);
  let url = process.env.REACT_APP_SERVICE_API_URL + 'shipping_order/uuid/' + id;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      //Authorization: 'Bearer ' + process.env.REACT_APP_SERVICE_API_TOKEN,
    },
    body: JSON.stringify({
      query: `query getShippingOrderDetails($shippingOrderId: String!) {
        shippingOrder(shippingOrderId: $shippingOrderId) {
          shippingOrderId
          shippingOrderStatus
          customerName
          customerAddress
          customerContactEmail
          customerContactPhone
          purchaseOrderNumber
          shippingOption
          updateAt
          shippingSourceAddress {
            name
            line
            city
            state
            postalCode
            countryCode
            email
            phone
          }
          shippingDestinationAddress {
            name
            line
            city
            state
            postalCode
            countryCode
            email
            phone
          }
          packageDetail {
            productName
            productQuantity
            weightValue
            weightUnit
            length
            width
            height
            dimensionUnit
          }
          options {
            shippingMethod
            destinationPort
            signatureRequired
            incoterms
            insuranceAmount
            insuranceCurrency
          }
        }
      }
    `,
      variables: {
        shippingOrderId: id,
      },
    }),
  });

  if (!response.ok) {
    throw json(
      { message: 'Could not get shipping order details.' + response.errors },
      { status: 500 }
    );
  } else {
    return response;
  }
} */
