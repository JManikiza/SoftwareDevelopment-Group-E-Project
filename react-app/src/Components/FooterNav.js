import { Footer } from "govuk-react";
function FooterNav() {
  return (
    <div>
      <Footer>
        <Footer.Link href="#">Terms and conditions&nbsp;</Footer.Link>
        <Footer.Link href="#">Privacy policy&nbsp;</Footer.Link>
        <Footer.Link href="#">Accessibility statement</Footer.Link>
      </Footer>
    </div>
  );
}

export default FooterNav;
