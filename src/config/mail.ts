interface IMailConfig {
  driver: 'ethereal' | 'ses';

  defaults: {
    from: {
      email: string;
      name: string;
    }
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  defaults: {
    from: {
      email: 'paula.guedes@customerx.cx',
      name: 'Paula da GoBarber'
    }
  }
} as IMailConfig;

