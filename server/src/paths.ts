import 'module-alias/register';
import { addAliases } from 'module-alias';

addAliases({
    '@Configs': `${__dirname}/Configs`,
    '@Constants': `${__dirname}/Constants`,
    '@Controllers': `${__dirname}/Controllers`,
    '@Middlewares': `${__dirname}/Middlewares`,
    '@Models': `${__dirname}/Models`,
    '@Routes': `${__dirname}/Routes`,
    '@Services': `${__dirname}/Services`,
    '@Utils': `${__dirname}/Utils`,
    '@Types': `${__dirname}/Types`,
});