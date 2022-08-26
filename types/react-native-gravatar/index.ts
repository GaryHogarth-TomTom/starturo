declare module 'react-native-gravatar' {
  class GravatarApi {
    static imageUrl: (config: {
      email: string;
      parameters: { size: string };
    }) => string;
  }
}
