import Image from "next/image";

import Container from "./../Container";

function Card({ title, imgSrc, imgAlt, children }) {
  return (
    <div className="max-w-[300px] flex flex-col items-start justify-start gap-2">
      <Image src={imgSrc} alt={imgAlt} width={280} height={280 * 0.6} />
      <p className="font-medium text-lg">{title}</p>
      <p className="text-[hsl(0,_0%,_30%)]">{children}</p>
    </div>
  );
}

export default function Products() {
  return (
    <div className="px-4 py-12">
      <Container className="flex flex-col items-stretch justify-start gap-8">
        <h2 className="font-semibold text-3xl">Try our other free products</h2>
        <div className="grid grid-rows-none sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-8">
          <Card
            title="Privacy Policy Generator"
            imgSrc="/images/privacy.png"
            imgAlt="image privacy"
          >
            Stock your store with 100s of products and start selling to
            customers in minutes, without the hassle of inventory or packaging.
          </Card>
          <Card
            title="Terms & Conditions Generator"
            imgSrc="/images/terms.png"
            imgAlt="image terms"
          >
            Stock your store with 100s of products and start selling to
            customers in minutes, without the hassle of inventory or packaging.
          </Card>
          <Card
            title="Domain Name Generator"
            imgSrc="/images/domain.png"
            imgAlt="image domain"
          >
            Stock your store with 100s of products and start selling to
            customers in minutes, without the hassle of inventory or packaging.
          </Card>
          <Card
            title="Invoice Generator"
            imgSrc="/images/invoice.png"
            imgAlt="image invoice"
          >
            Stock your store with 100s of products and start selling to
            customers in minutes, without the hassle of inventory or packaging.
          </Card>
        </div>
      </Container>
    </div>
  );
}
