import {
  Container,
  ContentContact,
  Icons,
  Icon,
  ConnectiveText,
  Form,
} from "./Contact.style";

import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  return (
    <Container id="contact">
      <ContentContact>
        <h2>
        <span>&lt;h2&gt;</span><br/> CONTATO <br/><span>&lt;/h2&gt;</span>
        </h2>
        <p>
          Para vagas de estágio em <span>Front-end</span>.
        </p>
        <Icons>
          <Icon>
            <div>
              <HiOutlinePhone />
            </div>
            <span>(44) 99128-9326</span>
          </Icon>
          <Icon>
            <div>
              <HiOutlineMail />
            </div>
            <span>tiago3d2s3@gmail.com</span>
          </Icon>
        </Icons>
        <div>
          <ConnectiveText>
            <p>
              ou
              <br /> envie um formulário
            </p>
          </ConnectiveText>

          <Form action="https://api.staticforms.xyz/submit" method="post">
            <div>
              <input
                type="text"
                name="name"
                id=""
                placeholder="Digite seu nome"
                required
              />
              <input
                type="text"
                name="email"
                id=""
                placeholder="Digite seu e-mail"
                required
              />
              <textarea
                name="message"
                id=""
                placeholder="Insira a mensagem"
                required
              ></textarea>
            </div>
            <input type="submit" value="Enviar" />
            <input
              type="hidden"
              name="accessKey"
              value="2f8a2afe-ac0b-4945-9a2e-1949ddef33bd"
            />
            <input
              type="hidden"
              name="redirectTo"
              value="http://localhost:3000/"
            />
          </Form>
        </div>
      </ContentContact>
    </Container>
  );
};

export default Contact;
