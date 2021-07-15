import { CreditCard } from "@material-ui/icons";

export function creditCardType(value) {
  //   let amex = new RegExp("^3[47][0-9]{13}");
  let visa = new RegExp("^4[0-9]{0,12}");

  //   let cup1 = new RegExp("^62[0-9]{14}[0-9]*$");
  //   let cup2 = new RegExp("^81[0-9]{14}[0-9]*$");

  let mastercard = new RegExp("^5[1-5][0-9]{0,14}");
  let mastercard2 = new RegExp("^2[2-7][0-9]{0,14}");

  //   let disco1 = new RegExp("^6011[0-9]{12}[0-9]*");
  //   let disco2 = new RegExp("^62[24568][0-9]{13}[0-9]*");
  //   let disco3 = new RegExp("^6[45][0-9]{14}[0-9]*$");

  //   let diners = new RegExp("^3[0689][0-9]{12}[0-9]*");
  //   let jcb = new RegExp("^35[0-9]{14}[0-9]*");

  if (visa.test(value)) {
    return "VISA";
  }
  //   if (amex.test(value)) {
  //     return "AMEX";
  //   }
  if (mastercard.test(value) || mastercard2.test(value)) {
    return "MASTERCARD";
  }
  //   if (disco1.test(value) || disco2.test(value) || disco3.test(value)) {
  //     return "DISCOVER";
  //   }
  //   if (diners.test(value)) {
  //     return "DINERS";
  //   }
  //   if (jcb.test(value)) {
  //     return "JCB";
  //   }
  //   if (cup1.test(value) || cup2.test(value)) {
  //     return "CHINA_UNION_PAY";
  //   }
  return undefined;
}

export const creditCardTypes = {
  VISA: "VISA",
  MASTERCARD: "MASTERCARD",
};
