import React, { useState } from "react";

import { TextInput } from "../../common-ui/TextInput";

import styles from "./styles.module.scss";

export const Page2 = () => {
  const [form, setForm] = useState({ first_name: "" });
  return (
    <div className={styles.page}>
      Page 2
      <TextInput
        value={form.first_name}
        description="Prénom"
        onChange={e => setForm({ ...form, first_name: e.target.value })}
      />
    </div>
  );
};
