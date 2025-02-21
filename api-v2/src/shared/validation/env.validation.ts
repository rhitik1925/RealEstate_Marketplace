import * as Joi from 'joi';

export const envValidationSchema = Joi.object({
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'test')
    .default('development'),

  PORT: Joi.number().default(3000),

  CORS_ENABLED: Joi.boolean().default(false),
  CORS_ORIGIN: Joi.string().default(''),

  JWT_SECRET: Joi.string().required(),
  JWT_SECRET_EXPIRES: Joi.string().default('7d'),

  DATABASE_URL: Joi.string().uri().required(),
  DATABASE_URL_NON_POOLING: Joi.string().uri().required(),
});
