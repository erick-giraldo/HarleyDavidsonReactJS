import React from "react";
import Yape from "../../assets/images/payment/yape.webp";
import Plin from "../../assets/images/payment/plin.webp";
import Tarjeta from "../../assets/images/payment/tarjeta.webp";
import Box from "@mui/material/Box";
import isEmpty from "is-empty";
import Modal from "@mui/material/Modal";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const ModalCheckOut = (props) => {
  const {
    open,
    handleClose,
    handleChange,
    handleInputs,
    pago,
    inputs,
    handleSaveOrder,
    validateEmails,
  } = props;
  const infoPayment = pago === "Plin" || pago === "Yape" ? "active" : "";
  const btnPAyment = !isEmpty(pago) ? "active" : "";
  const btnPay = pago === "Plin" || pago === "Yape" ? "active" : "";
  const btnCard = pago === "Tarjeta" ? "active" : "";
  const options = [
    {
      name: "Yape",
      value: "Yape",
    },
    {
      name: "Plin",
      value: "Plin",
    },
    {
      name: "Tarjeta",
      value: "Tarjeta",
    },
  ];

  const validateInputs = () => {
    if (
      !isEmpty(inputs.name) &&
      !isEmpty(inputs.phone) &&
      !isEmpty(inputs.email) &&
      !isEmpty(inputs.repeatEmail)
    )
      return false;
    return true;
  };
  const validateButton = (email1, email2) => {
    if (!validateInputs() && validateEmails(email1, email2)) {
      return true;
    } else 
    return false;
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={{ ...style, width: 500 }}>
        <form onSubmit={handleSaveOrder}>
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Checkout Carrito de Compras
              </h1>
              <button
                type="button"
                className="btn-close"
                onClick={handleClose}
              />
            </div>
            <hr className="hr-checkout" />
            <div className="modal-body">
              <div className="row">
                <div className="row payment-form">
                  <div className="col-md-6 pad-adjust">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={inputs.name}
                      placeholder="Nombre completo"
                      onChange={handleInputs}
                    />
                  </div>
                  <div className="col-md-6 pad-adjust">
                    <input
                      type="text"
                      name="phone"
                      value={inputs.phone}
                      className="form-control"
                      placeholder="Telefono"
                      onChange={handleInputs}
                    />
                  </div>
                  <div className="col-md-6 pad-adjust">
                    <input
                      type="email"
                      className="form-control"
                      value={inputs.email}
                      name="email"
                      placeholder="Correo"
                      onChange={handleInputs}
                    />
                  </div>
                  <div className="col-md-6 pad-adjust">
                    <input
                      type="email"
                      className="form-control"
                      value={inputs.repeatEmail}
                      name="repeatEmail"
                      placeholder="Reingrese su Correo"
                      onChange={handleInputs}
                    />
                  </div>
                  {!validateEmails(inputs.email, inputs.repeatEmail) && (
                    <p className="validate-email">Los correos no coinciden*</p>
                  )}
                </div>
              </div>
              <div className="choose-payment">
                <label> Por favor seleccione el tipo de pago: </label>
                <Box sx={{ minWidth: 180 }}>
                  <FormControl fullWidth>
                    <Select
                      className="select-pay"
                      value={pago}
                      displayEmpty
                      onChange={handleChange}
                      inputProps={{ "aria-label": "Without label" }}
                    >
                      <MenuItem value="" disabled>
                        <em className="seleccione">Seleccione</em>
                      </MenuItem>
                      {options.map((p) => (
                        <MenuItem value={p.value}>{p.name}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>
              </div>
              <div className="payment">
                <img
                  className={`yape ${pago === "Yape" ? "active" : ""}`}
                  src={Yape}
                  alt="logo"
                />
                <img
                  className={`plin ${pago === "Plin" ? "active" : ""}`}
                  src={Plin}
                  alt="logo"
                />
              </div>
              <form
                className={`paying-card credit-card-div ${
                  pago === "Tarjeta" ? "active" : ""
                }`}
              >
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <div className="row">
                      <div className="col-md-12">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Ingresar Número de Tarjeta"
                          defaultValue="4557 2598 4815 4935"
                          disabled
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-3 col-sm-3 col-xs-3">
                        <span className="help-block text-muted small-font">
                          Mes
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="MM"
                          defaultValue={10}
                          disabled
                        />
                      </div>
                      <div className="col-md-3 col-sm-3 col-xs-3">
                        <span className="help-block text-muted small-font">
                          Año
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="YY"
                          defaultValue={2027}
                          disabled
                        />
                      </div>
                      <div className="col-md-3 col-sm-3 col-xs-3">
                        <span className="help-block text-muted small-font">
                          CCV
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="CCV"
                          defaultValue="***"
                          disabled
                        />
                      </div>
                      <div className="col-md-3 col-sm-3 col-xs-3">
                        <img
                          src={Tarjeta}
                          className="img-rounded"
                          width="90px"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 pad-adjust">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Nombre del Titular de la tarjeta"
                          defaultValue="Erick Giraldo Muñoz"
                          disabled
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 pad-adjust">
                        <div className="checkbox">
                          <label>
                            <input
                              type="checkbox"
                              defaultChecked
                              className="text-muted"
                            />
                            Guardar detalles para pagos rápidos
                            <a href="#"> aprender cómo ?</a>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <hr className="hr-checkout" />
            <div className="modal-footer">
              <p className={`info-payment ${infoPayment}`}>
                Cuando haya realiazdo el pago por favor dar click en Aceptar
              </p>
              <button
                type="submit"
                className={`btn btn-pay-checkout ${btnPAyment}`}
                disabled={!validateButton(inputs.email, inputs.repeatEmail)}
              >
                <div className="spinnerPay" />
                <div className={`btn-pay-txt ${btnPay}`}>Realizar compra</div>
                <div className={`btn-card-txt ${btnCard}`}>Pagar</div>
              </button>
            </div>
          </div>
        </form>
      </Box>
    </Modal>
  );
};

export default ModalCheckOut;
