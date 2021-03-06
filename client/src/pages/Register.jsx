import styled from "styled-components";
import Navbar from "../components/Navbar";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://img.freepik.com/darmowe-zdjecie/dopasuj-blond-kobieta-z-idealnym-usmiechem-w-stylowej-odziezy-sportowej-patrzac-na-kamery-i-trzymajac-butelke-wody-na-bialej-scianie-zademonstruj-miesnie_273443-4534.jpg?w=1800&t=st=1653847066~exp=1653847666~hmac=39ea620a5069aced738b3865cd302878d668d3e9920afea28f439cec306ac390")
      center;
      overflow: hidden;
      background-size: cover;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
`

const RegistrationWrapper = styled.div`
  padding: 20px;
  width: 40%;
  background-color: white;
  margin: 50vh;
  transform: translateY(-50%);
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  border: 1px solid #333;
  border-radius: 5px;
`;

const Agreement = styled.span`
  font-size: 14px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #444;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <RegistrationWrapper>
          <Title>STWÓRZ KONTO</Title>
          <Form>
            <Input placeholder="email" name="email" />
            <Input placeholder="login" name="login" />
            <Input placeholder="hasło" name="password" />
            <Input placeholder="potwierdź hasło" />
            <Agreement>
              Tworząc konto wyrażam zgodę na przetwarzanie moich danych osobowych
              przez firmę "Suplekoksa" oraz jej podmioty.
            </Agreement>
            <Button>STWÓRZ</Button>
          </Form>
        </RegistrationWrapper>
      </Wrapper>
    </Container>
  );
};

export default Register;
