function ContactItem({ data: { id, name, lastName, email, phone } }) {
  return (
    <li key={id}>
      <p>
        {name} {lastName}
      </p>
      <p>
        <span>🗨</span> {email}
      </p>
      <p>
        <span>📞</span> {phone}
      </p>
      <button>delete</button>
    </li>
  );
}

export default ContactItem;
