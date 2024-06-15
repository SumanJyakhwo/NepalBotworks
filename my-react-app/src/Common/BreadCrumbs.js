import React from "react";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import "../Common/breadcrumb.css";

const Breadcrumbs = ({ items }) => {
  return (
    <Breadcrumb className=" custom-breadcrumb ">
      <Container>
        <div className="d-flex gap 2">
          {items.map((item, index) => (
            <BreadcrumbItem key={index} active={index === items.length - 1}>
              {item.link ? (
                <Link
                  to={item.link}
                  className="text-black"
                  style={{ textDecoration: "underline" }}
                >
                  {item.title}
                </Link>
              ) : (
                <span className="text-black">{item.title}</span>
              )}
            </BreadcrumbItem>
          ))}
        </div>
      </Container>
    </Breadcrumb>
  );
};

export default Breadcrumbs;
