import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import { secret } from './jwtConfig';
import { IPassport } from '../common/interfaces';
import { gameRepository } from '../data/repositories';

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: secret,
};

passport.use(
  new JwtStrategy(options, async ({ id, gameId }: IPassport, done) => {
    try {
      const currentGameId = await gameRepository.getGameId();
      if (gameId !== currentGameId)
        return done({ status: 401, message: 'Token is invalid.' });
      return done(null, { id });
    } catch (err) {
      return done(err);
    }
  })
);
