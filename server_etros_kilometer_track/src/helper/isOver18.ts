function isOver18(dateOfBirth: Date) {
  const date18YrsAgo = new Date();
  date18YrsAgo.setFullYear(date18YrsAgo.getFullYear() - 18);

  return dateOfBirth <= date18YrsAgo;
}

